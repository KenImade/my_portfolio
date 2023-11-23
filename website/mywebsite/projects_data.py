# sample data structure of a project
# {
#     'id': unique id of the project,
#     'name': 'Project name',
#     'description': 'Brief description about the project',
#     'tools': ['Python', 'SQL', 'Jupyter', 'Matplotlib'],
#     'chapters': [
#         {
#             'title': 'Overview',
#             'texts': [
#                 'This was my masters dissertation. It was based on the idea that when people are looking \
#                 to buy a house, they usually conduct research about the type of house they want online.',
#             ],
#             'hasImages': True,
#             'images': [
#                 {
#                     'caption': 'sample image',
#                     'path': 'images/projects/sample.jpg'
#                 }
#             ]
#         },
#     ],
#     'hasLinks': True,
#     'hasGit': True,
#     'gitLink': "https://www.gitlink.com",
#     'hasExternalLink': True,
#     'externalLink': "www.externallink.com"
# }

projects = [
    {
        'id': 1,
        'name': 'Optimising real estate valuation models with textual data.',
        'description': 'This project was aimed at optimising the performance of real estate prediction models using textual data.',
        'tools': ['Python', 'SQL', 'Jupyter', 'Matplotlib'],
        'chapters': [
            {
                'title': 'Overview',
                'texts': [
                    'This was my masters dissertation. It was based on the idea that when people are looking \
                    to buy a property, they usually conduct research about the type of property they want online. \
                    Conducting this research usally means going to a real estate listing website \
                    and checking out the details of the property.\
                    These details also contain textual descriptions of the property. So it makes a lot of sense for\
                    real estate predictive models to incorporate the textual data of properties in their predictions\
                    of a property\'s value.'
                ],
                'hasImages': True,
                'images': [
                    {
                        'caption': 'textual description from a real estate listing website',
                        'path': 'images/projects/project_1/textual_description.png'
                    }
                ]
            },
            {
                'title': 'Project Scope',
                'texts': [
                    'I decided to compare and contrast two cities in the UK. London \
                    the capital of the UK and having a population of 14.8 million people and Brighton\
                    which is a coastal city in the UK were my two picks.'
                ],
                'hasImages': False,
                'images': []
            },
            {
                'title': 'Data Gathering',
                'texts': [
                    'The first stage of the project was getting data from the real estate website.\
                    To this I had to build a custom web scraper using the Python library Selenium.\
                    My initial setup involved getting the data and saving the data directly to a Python list.\
                    However this did not work out as I didn\'t account for bad links and timeouts from the website.\
                    To overcome these challenges I setup a local MySQL server to save the data. This helped to\
                    fix the problem of timeout and bad links.'
                ],
                'hasImages': True,
                'images': [
                    {
                        'caption': 'local database setup',
                        'path': 'images/projects/project_1/local_db.png'
                    }
                ]
            },
            {
                'title': 'Data Cleaning and Transformation',
                'texts': [
                    'To prepare the data for modelling involved handling missing data, removing unusable observations\
                    and geocoding the data.',
                    'I first geocoded (identifying the longitude and latitude coordinates) each of the observations using the Nominatim API\
                    then I carried out data exploration on each row and got rid of values which served no purpose in my\
                    analysis. For example there were observations which had property type as \'boat\'. Categorical columns such\
                    as house_type with missing values were replaced with the \'Unknown\' value.',
                    'After carrying out this transformation the next step was inputting missing data. I tried three methods, mean, \
                    KNN, and MICE (Multiple Imputation by Chained Equation).\
                    I found KNN to be the best in terms of fitting the shape of the original dataset.',
                    'I then carried out outlier detection. Due to the fact that I was dealing with real estate data, \
                    it was not easy to just to apply one outlier detection method. After carrying out some research online,\
                    I came across an article which made use of three outlier methods (1%, Min-Max, and Z-score) to remove values\
                    that were considered outliers by the three methods. I applied this same method and was able to eliminate values\
                    which were considered as outliers by the three methods.',
                    'Textual data was processed using three methods Bag-of-Words, Doc2Vec, and Bert.'
                ],
                'hasImages': True,
                'images': [
                    {
                        'caption': 'London dataset after KNN Imputation',
                        'path': 'images/projects/project_1/knn_input_london.png'
                    }
                ]
            },
            {
                'title': 'Model Training and Evaluation',
                'texts': [
                    'To analyse the impact of textual data on the models, each model was trained with and without textual data.\
                    The machine learning algorithms used were Ridge, Lasso, Random Forest, and LightGBM. The datasets were split\
                    in a 70:30 ratio (70 for training, 30 for test). Random Grid Search was used to identify the best parameters for\
                    each model. Evaluation was done using the following metrics; Mean Absolute Error (MAE), Mean Absolute Percentage Error\
                    (MAPE), Root Mean Squared Error (RMSE), and R-squared (𝑅2).'
                ],
                'hasImages': False,
                'images': []
            },
            {
                'title': 'Results and Conclusion',
                'texts': [
                    'Based on the R-squared value, the best performing for the London dataset was the Random Forest Model without textual data\
                    with an R-squared score of 0.828. While for the Brighton dataset the best performing model was the LightGBM model with Bag of Words\
                    (unigram) with an R-squared score of 0.812.',
                    'In conclusion the results showed that optimising real estate valuation models with textual data varies between\
                    models and also between cities.'
                ],
                'hasImages': False,
                'images': []
            } 
        ],
        'hasLinks': True,
        'hasGit': True,
        'gitLink': "https://github.com/KenImade/real_estate_price_predictor",
        'hasExternalLink': False,
        'externalLink': ""
    },
    {
        'id': 2,
        'name': 'Real estate dashboard',
        'description': 'A dasboard for stakeholders in the real estate industry to utilise for\
        gaining insight into the London and Brighton market.',
        'tools': ['PowerBI'],
        'chapters': [
            {
                'title': 'Introduction',
                'texts': [
                    'After completing my masters dissertation, I thought about what other data product\
                    could be derived from the real estate dataset I had., I decided to\
                    create a dashboard with the dataset. The dashboard could serve as a guide\
                    for home buyers, investors, and real estate agents trying to get a birds\' eye\
                    view of the real estate market in London and Brighton.'
                ],
                'hasImages': False,
                'images': []
            },
            {
                'title': 'Data Ingestion and Transformation',
                'texts': [
                    'The datasets were ingested from their respective csv files into PowerBI.\
                    I then redesigned the schema to a star schema making dimension tables and a\
                    fact table. The next step was to change the data types of each column to the right type for\
                    PowerBI. For example, rather than having price just be a numerical column I changed it to\
                    currency.'
                ],
                'hasImages': True,
                'images': [
                    {
                        'caption': 'Dimension and Fact tables',
                        'path': 'images/projects/project_2/dim_fact_tables.png'
                    },
                    {
                        'caption': 'Data transformation',
                        'path': 'images/projects/project_2/data_transformation.png'
                    }
                ]
            },
            {
                'title': 'Building the Dashboard',
                'texts': [
                    'To build an effective dashboard, I had to take on the perspective of the user\
                    and ask myself some questions, such as; What kind of information would they want\
                    to see about the housing market?, How should the data be visualized (graphs, charts, tables)?,\
                    What key features are needed (interactive maps, search filters, financial calculators, etc.)?,\
                    etc. Asking these type of questions helped me to decide the arrangement and visualizations\
                    to be used in the dashboard.',
                    'You can check out a demo of the dashboard through the link above 😊.'
                ],
                'hasImages': True,
                'images': [
                    {
                        'caption': 'Dashboard',
                        'path': 'images/projects/project_2/dashboard.png'
                    }
                ]
            }
        ],
        'hasLinks': True,
        'hasGit': False,
        'gitLink': "",
        'hasExternalLink': True,
        'externalLink': "https://youtu.be/P92I9ZQweUM"
    },
    {
        'id': 3,
        'name': 'Initial Coin Offering (ICO) Prediction',
        'description': 'Using relevant information about companies I evaluated various machine \
             learning models to find which would be best at predicting successful ICO\'s.',
        'tools': ['R'],
        'chapters': [
            {
                'title': 'Introduction',
                'texts': [
                    'Initial coin offerings (ICOs) are a crowdfunding method where new cryptocurrencies\
                    or tokens are sold for established ones like Bitcoin or for fiat currency, often\
                    funding blockchain projects. Their success varies greatly, influenced by factors\
                    such as the project team\'s quality, the project\'s novelty, marketing efforts,\
                    and market conditions. Machine learning (ML) techniques show promise in predicting\
                    ICO outcomes by analyzing patterns from past ICOs. This project focused on evaluating\
                    different ML techniques for forecasting ICO success based on these factors.'
                ],
                'hasImages': False,
                'images': []
            },
            {
                'title':'Data Exploration',
                'texts': [
                    'The dataset contained 16 variables and 2767 observations\
                    related to fundraising projects in ICOs. Key features include project ID, success indicators,\
                    presence of promotional videos, expert ratings, pricing in USD, location, campaign dates,\
                    team size, GitHub and Reddit presence, blockchain platform, coin quantity, minimum investment\
                    requirements, and the percentage of coins distributed. The dataset showed that 37.2% of ICOs\
                    were successful. Key insights include more successful ICOs having videos, GitHub and Reddit profiles,\
                    larger teams, higher average ratings, and issuing more coins, while unsuccessful ICOs had higher average\
                    coin prices. Singapore had the most ICOs. Successful ICOs retained a higher share of their coins compared\
                    to unsuccessful ones. The most common words in brand slogans were “platform”, “blockchain”, and “decentralized”,\
                    with visualizations provided for these findings.'
                ],
                'hasImages': True,
                'images': [
                    {
                        'caption': 'Github variable distribution',
                        'path': 'images/projects/project_3/has_github_dist.png'
                    },
                    {
                        'caption': 'Reddit variable distribution',
                        'path': 'images/projects/project_3/has_reddit_dist.png'
                    },
                    {
                        'caption': 'Video variable distribution',
                        'path': 'images/projects/project_3/has_video_dist.png'
                    }
                ]
            },
            {
                'title': 'Data Preparation',
                'texts': [
                    'In the ICO dataset preparation, several data cleaning and processing\
                    steps were undertaken. Duplicate observations were checked and none were\
                    found. The ID variable was removed for lacking predictive power, while\
                    \'success\' was converted to a factor with \'Yes\' and \'No\' values.\
                    Brand slogans were standardized, and anomalies in the priceUSD variable\
                    were eliminated. CountryRegion values were harmonized, and start and end \
                    dates were used to create an \'ico_duration\' variable, removing negative \
                    durations. Platform names were standardized, and distributed percentages \
                    exceeding 100% were removed.', 
                    'Missing data in numerical variables like \
                    priceUSD and teamSize was addressed through imputation methods, with \
                    complex methods like MICE preferred for maintaining data variation. \
                    Missing categorical data in countryRegion and platform were labeled as\
                    \'Unknown.\' Outliers in priceUSD, coinNum, and ico_duration were analyzed \
                    and either validated or corrected. A correlation plot revealed weak correlations \
                    between ico_duration, priceUSD, and coinNum with other variables, while rating \
                    showed a slight positive relationship with hasVideo, teamSize, hasGithub, and hasReddit.'
                ],
                'hasImages': True,
                'images': [
                    {
                        'caption': 'Missing Data Plot',
                        'path': 'images/projects/project_3/missing_data.png'
                    }
                ]
            },
            {
                'title': 'Modelling  and Evaluation',
                'texts': [
                    'Five classification models were used to model the data: k-Nearest Neighbors (KNN), \
                    Naïve Bayes, Decision Trees, Support Vector Machines (SVM), and Logistic Regression. \
                    KNN uses distance calculations to classify based on \
                    nearest neighbors, Naïve Bayes relies on Bayes\' theorem and assumes feature independence, \
                    Decision Trees use rule-based hierarchical structures, SVMs find an optimal hyperplane \
                    to separate classes, and Logistic Regression predicts probabilities using the logistic \
                    function. The dataset, with 2594 observations post-processing, was split into training \
                    and test sets in an 80:20 ratio. Models were trained using cross-validation values of 10, \
                    30, and 50, and evaluated based on accuracy, precision, sensitivity, and specificity. \
                    The results showed SVM outperforming in accuracy, precision, and specificity across all \
                    cross-validation values, while Naïve Bayes excelled in sensitivity.'
                ],
                'hasImages': True,
                'images': [
                    {
                        'caption': 'Result',
                        'path': 'images/projects/project_3/result.png'
                    }
                ]
            }
        ],
        'hasLinks': True,
        'hasGit': True,
        'gitLink': "https://github.com/KenImade/ico_prediction",
        'hasExternalLink': False,
        'externalLink': ""
    }
]
