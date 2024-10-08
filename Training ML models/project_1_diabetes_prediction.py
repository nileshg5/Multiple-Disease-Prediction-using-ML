# -*- coding: utf-8 -*-
"""Project 1: Diabetes Prediction.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1ifG54Jbat2uMu1j76TBSTp8xVAioogb8

Importing the Dependencies
"""

import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn import svm
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
from sklearn.naive_bayes import GaussianNB
import warnings
warnings.filterwarnings('ignore')

from google.colab import drive
drive.mount('/content/drive')

"""Data Collection and Analysis

PIMA Diabetes Dataset
"""

# loading the diabetes dataset to a pandas DataFrame
diabetes_dataset = pd.read_csv('/content/drive/MyDrive/Colab Notebooks/diabetes.csv')

diabetes_dataset.info()

# printing the first 5 rows of the dataset
diabetes_dataset.head()

# number of rows and Columns in this dataset
diabetes_dataset.shape

# getting the statistical measures of the data
diabetes_dataset.describe()

diabetes_dataset['Outcome'].value_counts()

# separating the data and labels
X = diabetes_dataset.drop(columns = 'Outcome', axis=1)
Y = diabetes_dataset['Outcome']

print(X)

print(Y)

"""Data Standardization"""

scaler = StandardScaler()

scaler.fit(X)

standardized_data = scaler.transform(X)

print(standardized_data)

X = standardized_data
Y = diabetes_dataset['Outcome']

print(X)
print(Y)

"""Train Test Split"""

X_train, X_test, Y_train, Y_test = train_test_split(X,Y, test_size = 0.2, stratify=Y, random_state=2)

print(X.shape, X_train.shape, X_test.shape)

"""Training the Model"""

model = LogisticRegression(solver='liblinear')

# training the LogisticRegression model with Training data
model.fit(X_train, Y_train)

classifier = svm.SVC(kernel='linear')

classifier.fit(X_train, Y_train)

gnb = GaussianNB()

#training the support vector Machine Classifier
gnb.fit(X_train, Y_train)

"""Model Evaluation

Accuracy Score
"""

# accuracy score on the training data in logistic regression
X_train_prediction_lr = model.predict(X_train)
training_data_accuracy_lr = accuracy_score(X_train_prediction_lr, Y_train)
training_data_accuracy_lr

#accuracy score on the test data in logistic regression
X_test_prediction_lr = model.predict(X_test)
test_data_accuracy_lr = accuracy_score(X_test_prediction_lr, Y_test)
test_data_accuracy_lr

# accuracy score on the training data in svm
X_train_prediction_svm = classifier.predict(X_train)
training_data_accuracy_svm = accuracy_score(X_train_prediction_svm, Y_train)
training_data_accuracy_svm

# accuracy score on the test data in svm
X_test_prediction_svm = classifier.predict(X_test)
test_data_accuracy_svm = accuracy_score(X_test_prediction_svm, Y_test)
test_data_accuracy_svm

# accuracy score on the training data in naive bayes
X_train_prediction_nb = gnb.predict(X_train)
training_data_accuracy_nb = accuracy_score(X_train_prediction_nb, Y_train)
training_data_accuracy_nb

# accuracy score on the test data in naive bayes
X_test_prediction_nb = gnb.predict(X_test)
test_data_accuracy_nb = accuracy_score(X_test_prediction_nb, Y_test)
test_data_accuracy_nb

"""Making a Predictive System"""

input_data = (4,103,60,33,192,24,0.966,33)

# changing the input_data to numpy array
input_data_as_numpy_array = np.asarray(input_data)

# reshape the array as we are predicting for one instance
input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)

# standardize the input data
std_data = scaler.transform(input_data_reshaped)
print(std_data)

prediction = classifier.predict(std_data)
print(prediction)

if (prediction[0] == 0):
  print('The person is not diabetic')
else:
  print('The person is diabetic')

import pickle
with open('diabetes.pkl', 'wb') as file:
   pickle.dump(model, file)