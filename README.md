# Environment
* OS : Window 10 pro Edition
* Browser : Chrome
* Tool / IDE : VS Code
* Language : HTML, JavaScript ( d3.js )

# Visualization for Solve Problem
* According to United States Census Bureau - which investigate US’s population</br>
Chicago is **the third** most populated city in the United States
+ Because there are many people **a lot of crimes** occurred, so we need to figure out the **problem**

## Data Source
Chicago Crime Data from https://data.cityofchicago.org/Public-Safety/Crimes-2001-to-present-Dashboard/5cd6-ry5g
* ### Pre Processing
  **1.**  In Python, I used Pandas’s read_csv / to_csv method to separate data by years</br>
  but some data is old, so I selected 10 years data ( 2009 ~ 2018 )
  ```python
  import numpy as np
  import pandas as pd
  
  csv_2009 = pd.DafaFrame({"ID":[], "Case Number":[], "Date":[] ... "Location":[]})
  
  csv_data = pd.read_csv('./Crimes_-_2001_to_present.csv',header = None)
  
  n = 0
  
  for i in range(1,7005599) :
      if csv_data[17][i] == "2009" :
          csv_2001.loc[n] = [(csv_data[j][i]) for j in range(22)]
          n = n + 1
  
  csv_2009.to_csv('./crime_2009.csv', sep = ',', na_rep = '')
  ```
  **2.**  In MySQL, I used LOAD DATA method to insert data to database, then I used COUNT method to extract data
  ```SQL
  LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/crime_2009.csv'
  INTO TABLE Crime_Data FIELDS TERMINATED BY ',' LINES TERMINATED BY '\r\n';
  ```
  
* ### Analyzing
  You can see visualizations on [here](https://ssh1997.github.io/Data_Visualization_HW2/)

* ### Cross Browsing
  - In Chrome
    ![1](https://user-images.githubusercontent.com/48575504/71655544-9e1a3880-2d7a-11ea-8d26-336bcbb20467.PNG)
  - In Firefox
    ![2](https://user-images.githubusercontent.com/48575504/71655560-ad998180-2d7a-11ea-8abd-70729883cbb0.PNG)
  - In Microsoft Edge
    ![3](https://user-images.githubusercontent.com/48575504/71655566-affbdb80-2d7a-11ea-9968-ce85b4ae00ce.PNG)
  It works well on all three browsers

* ### Interaction
  ![4](https://user-images.githubusercontent.com/48575504/71655623-ea657880-2d7a-11ea-8bab-f7f9d34fd903.PNG)
