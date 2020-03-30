FROM ubuntu:latest
RUN apt-get update -y
RUN apt-get install -y python-pip python-dev build-essential
COPY . /helper
WORKDIR /helper
RUN pip install -r requirements.txt
ENTRYPOINT ["python"]
CMD ["__init__.py"]