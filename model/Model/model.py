import numpy as np
import pandas as pd
import keras
from keras.models import Sequential
from keras.layers import Dense
from sklearn.model_selection import train_test_split
import joblib

df1 = pd.read_csv('Healthcare_data.csv')
s = ['Total Discharges',
       'Average Covered Charges', 'Average Total Payments',
       'Average Medicare Payments']

for i in s:
    df1[i] = df1[i].str.split(',').str.join('')
df1[s] = df1[s].astype("float")

state_data = pd.read_csv('state.csv')

new_df = state_data.drop_duplicates(subset="Insured Males 18-25")
s = ['Insured Males 18-25',
       'Noninsured Males 18-25', 'Females 18-25 with Insurance',
       'Females 18-25 without insurance']
for i in s:
    new_df[i] = new_df[i].str.split(',').str.join('')
new_df[s] = new_df[s].astype("float")

male_insured = new_df['Insured Males 18-25']
female_insured = new_df['Females 18-25 with Insurance']
new_df['ratio'] = male_insured / female_insured
new_df[['State','ratio']]

population = male_insured + female_insured + new_df['Noninsured Males 18-25'] + new_df['Females 18-25 without insurance']
new_df['percentage_insured'] =  (male_insured + female_insured) * 100 / population
new_df['percentage_insured']

df1.rename(columns = {'Provider State':'State'}, inplace = True)
dfinal = df1.merge(new_df, on="State", how = 'inner')
dfinal.pop('Summary Level')

model_df = dfinal[['Total Discharges', 'Average Medicare Payments', 'Average Covered Charges', 'Average Total Payments','percentage_insured']]

# Load the data into a pandas dataframe
df = model_df

# Split the data into training and testing sets
train_data, test_data, train_labels, test_labels = train_test_split(df.drop("percentage_insured", axis=1), df["percentage_insured"], test_size=0.2)

# Scale the data
scaler = StandardScaler()
train_data = scaler.fit_transform(train_data)
test_data = scaler.transform(test_data)

# Define the architecture of the model
model = Sequential()
model.add(Dense(64, activation='relu', input_dim=train_data.shape[1]))
model.add(Dense(32, activation='relu'))
model.add(Dense(1, activation='linear'))

# Compile the model
model.compile(optimizer='adam',
              loss='mse',
              metrics=['mean_absolute_error'])

early_stop = EarlyStopping(monitor='val_loss', mode='min', verbose=1, patience=5)

# Train the model
model.fit(train_data, train_labels, epochs=30, batch_size=32,  validation_data=(test_data, test_labels), callbacks=[early_stop])

# Make predictions on the test data
test_predictions = model.predict(test_data).flatten()
# Calculate the MAPE
mape = 100 * np.mean(np.abs((test_labels - test_predictions) / test_labels))
print("Mean absolute percent error: {:.2f}%".format(mape))

filename = 'ann_model.sav' 
joblib.dump(model,filename) #Saves model in disk



