# -*- coding: utf-8 -*-
"""Project 3:Breast Cancer Recurrence.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1vRUNh8fOuajdxz5ZZ3c7iNZM7OUHIt3a

**Importing the Dependencies**
"""

import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
from sklearn.naive_bayes import GaussianNB
from sklearn import svm
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.ensemble import GradientBoostingClassifier
import warnings
warnings.filterwarnings('ignore')

"""**About Dataset**

The data set contains patient records from a 1984-1989 trial conducted by the German Breast Cancer Study Group (GBSG) of 720 patients with node positive breast cancer; it retains the 686 patients with complete data for the prognostic variables.

These data sets are used in the paper by Royston and Altman(2013). The Rotterdam data is used to create a fitted model, and the GBSG data for validation of the model. The paper gives references for the data source.

**Dataset Format**

A data set with 686 observations and 11 variables.

Columns    |   	Description
-----------|---------------
pid	       | patient identifier
age	       | age, years
meno	     | menopausal status (0= premenopausal, 1= postmenopausal)
size	     | tumor size, mm
grade	     | tumor grade
nodes	     | number of positive lymph nodes
pgr	       | progesterone receptors (fmol/l)
er	       | estrogen receptors (fmol/l)
hormon	   | hormonal therapy, 0= no, 1= yes
rfstime	   | recurrence free survival time; days to first of recurrence, death or last follow-up
status	   | 0= alive without recurrence, 1= recurrence or death

**References**

Patrick Royston and Douglas Altman, External validation of a Cox prognostic model: principles and methods. BMC Medical Research Methodology 2013, 13:33

**Data Collection and Processing**
"""

# loading the csv data to a Pandas DataFrame
from google.colab import drive
drive.mount('/content/drive')
data = pd.read_csv('/content/drive/MyDrive/Colab Notebooks/gbsg.csv')

# print first 5 rows of the dataset
data.head()

# number of rows and columns in the dataset
data.shape

# getting some info about the data
data.info()

# removing less relevant parameters from the dataset.
data = data.drop(columns={'Unnamed: 0','pid'},axis=1)
# save the clean dataset.
data.to_csv('/content/data.csv')

# checking for missing values
data.isnull().sum()

# checking number of rows and columns in the dataset again
data.shape

# statistical measures about the data
data.describe()

# checking the distribution of Target Variable
data['status'].value_counts()

"""0 --> alive without recurrence

1 --> recurrence or death

**Splitting the Features and Target**
"""

X = data.drop(columns='status', axis=1)
Y = data['status']

print(X)

print(Y)

"""**Splitting the Data into Training data & Test Data**"""

X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.1, stratify=Y, random_state=2)

print(X.shape, X_train.shape, X_test.shape)

"""**Model Training**

*Logistic Regression*
"""

model = LogisticRegression()

# training the LogisticRegression model with Training data
model.fit(X_train, Y_train)

"""*Naive Bayes*"""

gnb = GaussianNB()

# training the Naive Bayes model with Training data
gnb.fit(X_train, Y_train)

"""*Decision Tree Classifier*"""

criterions = ['gini', 'entropy']
parameters = dict(criterion=criterions)
dtc = GridSearchCV(
    DecisionTreeClassifier(), parameters, cv=5, scoring='accuracy'
)
dtc.fit(X, Y.ravel())
dtc_opt = dtc.best_estimator_
print(dtc.best_params_)
print(dtc.best_score_)

dtc = DecisionTreeClassifier(criterion='gini')
dtc.fit(X_train, Y_train.ravel())
dtc_pred = dtc.predict(X_test)
score = accuracy_score(dtc_pred, Y_test)
print(score)

"""*Random Forest Classifier*"""

parameters = {
    'n_estimators': [10, 100, 250, 500]
}
rfc = GridSearchCV(
    RandomForestClassifier(), parameters, cv=5, scoring='accuracy'
)
rfc.fit(X, Y.ravel())
rfc_opt = rfc.best_estimator_
print(rfc.best_params_)
print(rfc.best_score_)

rfc = RandomForestClassifier(n_estimators=200)
rfc.fit(X_train, Y_train.ravel())
rfc_pred = rfc.predict(X_test)
score = accuracy_score(rfc_pred, Y_test)
print(score)

"""*Support Vector Machine*"""

svm_model = svm.SVC(kernel='linear')

# training the SVM model with training data
svm_model.fit(X_train, Y_train)

"""**Model Evaluation**

**Accuracy Score**
"""

# accuracy on training data in Logistic Regression
X_train_prediction = model.predict(X_train)
training_data_accuracy = accuracy_score(X_train_prediction, Y_train)

print('Accuracy on Training data : ', training_data_accuracy)

# accuracy on test data in Logistic Regression
X_test_prediction = model.predict(X_test)
test_data_accuracy = accuracy_score(X_test_prediction, Y_test)

print('Accuracy on Test data : ', test_data_accuracy)

# accuracy on training data in Naive Bayes
X_tr_predict_nb = gnb.predict(X_train)
training_data_accuracy_nb = accuracy_score(X_tr_predict_nb, Y_train)

print('Accuracy on Training data : ', training_data_accuracy_nb)

# accuracy on test data in Naive Bayes
X_test_predict_nb = gnb.predict(X_test)
test_data_accuracy_nb = accuracy_score(X_test_predict_nb, Y_test)

print('Accuracy on Test data : ', test_data_accuracy_nb)

# accuracy on training data in Decision Tree Classifier
X_train_prediction_dtc = dtc.predict(X_train)
training_data_accuracy_dtc = accuracy_score(X_train_prediction_dtc, Y_train)

print('Accuracy on Training data : ', training_data_accuracy_dtc)

# accuracy on testing data in Decision Tree Classifier
X_test_prediction_dtc = dtc.predict(X_test)
test_data_accuracy_dtc = accuracy_score(X_test_prediction_dtc, Y_test)

print('Accuracy on Test data : ', test_data_accuracy_dtc)

# accuracy on training data in Random Forest Classifier
X_train_prediction_rfc = rfc.predict(X_train)
training_data_accuracy_rfc = accuracy_score(X_train_prediction_rfc, Y_train)

print('Accuracy on Training data : ', training_data_accuracy_rfc)

# accuracy on testing data in Random Forest Classifier
X_test_prediction_rfc = rfc.predict(X_test)
test_data_accuracy_rfc = accuracy_score(X_test_prediction_rfc, Y_test)

print('Accuracy on Test data : ', test_data_accuracy_rfc)

# accuracy score on training data in SVM
X_train_prediction_svm = svm_model.predict(X_train)
training_data_accuracy_svm = accuracy_score(Y_train, X_train_prediction_svm)

print('Accuracy score of training data : ', training_data_accuracy_svm)

# accuracy score on testing data in SVM
X_test_prediction_svm = svm_model.predict(X_test)
test_data_accuracy_svm = accuracy_score(X_test_prediction_svm, Y_test)

print('Accuracy score of test data : ', test_data_accuracy_svm)

"""So, It's better to work with Random Forest Classifier in this case.

Building a Predictive System
"""

input_data = (61,1,50,2,4,10,10,0,2456)

# change the input data to a numpy array
input_data_as_numpy_array= np.asarray(input_data)

# reshape the numpy array as we are predicting for only on instance
input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)

prediction = rfc.predict(input_data_reshaped)
print(prediction)

if (prediction[0]== 0):
  print('alive without recurrence')
else:
  print('recurrence or death')

import pickle
with open('brcancermodel.pkl', 'wb') as file:
  pickle.dump(rfc, file)

import joblib

# Save the model
joblib.dump(model, 'brcancermodel.joblib')