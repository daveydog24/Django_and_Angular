from django.db import models

class Hero(models.Model):
    name = models.CharField(max_length=255)
    abilities = models.CharField(max_length=255)

class User(models.Model):
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
