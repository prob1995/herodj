Deploy to Heroku:
    Create venv
    activate venv
    install django-toolbet
    create Procfile
    create requirments.txt
    modify settings.py and wsgi.py
    add something to .gitignore
    create static folder in djtest/ and add one any file (usually .dir)
    git it
    heroku it

    or visit
    https://devcenter.heroku.com/articles/getting-started-with-django
    
    if you want re heroku it, use code below to remove previous heroku git. 
    git remote rm heroku
    
For Cloud9 test:
    Go to djtest/settings.py and djtest/wsgi.py 
    mark #FOR HEROKU DEPLOY 

For Heroku deploy:
    Go to djtest/settings.py and djtest/wsgi.py 
    unmark #FOR HEROKU DEPLOY # herodj
