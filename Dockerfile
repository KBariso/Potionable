FROM node:12 AS build-stage

WORKDIR /react-app
COPY react-app/. .

# You have to set this because it should be set during build time.
ENV REACT_APP_BASE_URL=<Your-REACT_APP_BASE_URL-here>
# ^ only change we make is here.

# Build our React App
RUN npm install
RUN npm run build

FROM python:3.9

# Setup Flask environment
ENV FLASK_APP=app
ENV FLASK_ENV=production
ENV SQLALCHEMY_ECHO=True

EXPOSE 8000

WORKDIR /var/www
COPY . .
COPY --from=build-stage /react-app/build/* app/static/

# Install Python Dependencies
RUN pip install -r requirements.txt
RUN pip install psycopg2

# Run flask environment
CMD gunicorn app:app
# ^ Related to multithreading lecture. gunicorn is what is called a WSGI application server.
# Flask is a WSGI application.
# Need gunicorn to run our flask in production. Becuase flask production server cannot hundle multiple requests across multiple machines.
