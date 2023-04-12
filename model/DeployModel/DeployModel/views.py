from django.http import HttpResponse
from django.shortcuts import render
import json
import joblib
import pandas as pd
# import numpy as np

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def process_form(request):
	if request.method == 'POST':
		data = json.loads(request.body)
        # Process form data and run through the model
		model = joblib.load('ann_model.sav')
    	
		lls = []
		print("Data:", data)
		lls.append(float(data.get('discharges')))
		lls.append(float(data.get('medicare')))
		lls.append(float(data.get('covered')))
		lls.append(float(data.get('total')))
		arr = pd.DataFrame([[lls[0], lls[1], lls[2], lls[3]]])
		print(arr.values)

		ans = model.predict(arr.values)
		result = ans[0][0]
		response = {
        	"result": round(float(result), 2)
        }
		return JsonResponse(response)
	else:
		return JsonResponse({'error': 'Invalid request method'})


def home(request):
	return render(request, 'home.html')

def result(request):

	model = joblib.load('ann_model.sav')

	lls = []
	lls.append(float(request.GET['discharges']))
	lls.append(float(request.GET['medicare']))
	lls.append(float(request.GET['covered']))
	lls.append(float(request.GET['total']))
	arr = pd.DataFrame([[lls[0], lls[1], lls[2], lls[3]]])
	print(arr.values)

	ans = model.predict(arr.values)

	return render(request,"result.html", {'ans': ans[0][0]})
