from django.shortcuts import render
from django.http import JsonResponse
from django.views import View
import json
from .models import Hero
from .models import User
from .models import GithubPlayer

# To make setting up our Django server with RESTful routes 
# easier we will be making use of Django's class based views.
class Heroes(View):
    # GRABS ALL OF OUR HEROES IN THE DATABASE AND RETURNS THE LIST
    def get(self, request):
        return JsonResponse({'status': 'ok', 'heroes': list(Hero.objects.values().all())})
    
    # ADDS THE PASSED INFORMATION FOR A NEW HERO TO OUR DATABASE AND RETURNS THE UPDATED LIST
    def post(self, request):
        our_data = json.loads(request.body.decode())
        Hero.objects.create(name=our_data["name"], abilities=our_data['abilities'])
        return JsonResponse({'status': 'ok', 'heroes': list(Hero.objects.values().all())})
 
class HeroDetails(View): 
    # UPDATES THE PASSED IN USER AND USER INFO IN OUR DATABASE AND RETURNS THE UPDATED LIST 
    def put(self, request, hero_id):
        our_data = json.loads(request.body.decode())
        Hero.objects.filter(id=hero_id).update(name=our_data["name"], abilities=our_data['abilities'])
        return JsonResponse({'status': 'ok', 'heroes': list(Hero.objects.values().all())})

    # FILTER OUT THE SELECTED HERO PASSED IN AND DELETES IT, THEN RETURNS THE UPDATED LIST
    def delete(self, request, hero_id):
        Hero.objects.filter(id=hero_id).delete()
        return JsonResponse({'status': 'ok', 'heroes': list(Hero.objects.values().all())})

# ADDS THE PASSED INFORMATION FOR A NEW USER TO OUR DATABASE
class AddUser(View):
    def post(self, request):
        our_data = json.loads(request.body.decode())

        user = list(User.objects.values().all().filter(email=our_data['email']))
        # IF EMAIL ALREADY IN THE SYSTEM RETURN THE ERROR
        if (user):
            return JsonResponse({'status': 'error', 'error': "EMAIL IS ALREADY IN THE SYSTEM"})
        # ELSE CREATE THE NEW USER IN THE SYSTEM AND SEND BACK THE USERS INFORMATION WITHOUT PASSWORD
        else: 
            User.objects.create(
                first_name= our_data["firstname"], 
                last_name= our_data["lastname"], 
                email= our_data["email"], 
                password= our_data['password'],
            )
            user = list(User.objects.values().all().filter(email=our_data['email']))

            # ONLY WANT TO SEND BACK SENSITIVE INFORMATION
            logged_user = {
                "first_name": user[0]["first_name"],
                "last_name": user[0]["last_name"],
                "email": user[0]["email"],
                "created_at": user[0]["created_at"],
                "updated_at": user[0]["updated_at"],
                "last_login": user[0]["last_login"]
            }
            return JsonResponse({'status': 'ok', 'user': logged_user})
        return JsonResponse({'status': 'ok'})
    
# GRABS ALL THE USERS IN OUR DATABASE AND RETURNS THEM IN A LIST
class GetUsers(View):
    def get(self, request):
        return JsonResponse({'status': 'ok', 'users': list(User.objects.values().all())})

# ***************************************************************************************************************
#                                 This should be A GET REQUEST im pretty sure!!!
# ***************************************************************************************************************
class LoginUser(View):
    # CHECKS TO MAKE SURE THE USER IS IN THE DATABSE
    def post(self, request):
        our_data = json.loads(request.body.decode())
        login_email = our_data['loginemail']
        login_password = our_data['loginpassword']

        # should do a try catch method here
        user = list(User.objects.values().all().filter(email=login_email))

        if (user):
            email = user[0]["email"]
            password = user[0]["password"]

            if (login_email == email and login_password == password):
                first_name = user[0]["first_name"]
                last_name = user[0]["last_name"]
                created_at = user[0]["created_at"]
                updated_at = user[0]["updated_at"]
                last_login = user[0]["last_login"]

                # only want to send back non sensitve information 
                logged_user = {
                    "first_name": first_name,
                    "last_name": last_name,
                    "email": email,
                    "created_at": created_at,
                    "updated_at": updated_at,
                    "last_login": last_login
                }
                return JsonResponse({'status': 'ok', 'user': logged_user})
            else:
                return JsonResponse({'status': 'error', 'error': "INCORRECT PASSWORD AND EMAIL COMBO"})

# ###################  LATER WE CAN KEEP TRACK OF THESE SO PEOPLE CANT LOG IN MORE THAN 5 TIMES OR SOMETHING ######################
        return JsonResponse({'status': 'error', 'error': "WE DO NOT HAVE A MATCHING EMAIL IN OUR DATABASE, SORRY."})


# class UpdateUser(View):
    # gets information from json and finds the User in the database we are looking to update and updates it with 
    # the new information that was sent through.
    # def put(self, request, user_id):
    #     our_data = json.loads(request.body.decode())
    #     user = User.objects.filter(id=user_id).update(firstname=our_data["firstname"], lastname=our_data["lastname"], email=our_data["email"], password=our_data['password'])
    #     return JsonResponse({'status': 'ok'})

# class DeleteUser(View):
    # filters hero by id in the database and deletes that hero object and sends back our updated list
    # def delete(self, request, user_id):
    #     User.objects.filter(id=user_id).delete()
    #     return JsonResponse({'status': 'ok'})

class AddGithubPlayer(View):
    def post(self, request):
        our_data = json.loads(request.body.decode())

        
        GithubPlayer.objects.create(
            name= our_data["name"], 
            score= our_data["score"], 
            pic= our_data["pic"], 
        )
        find_player = list(GithubPlayer.objects.values().all().filter(name=our_data['name']))

        player = {
            "name": find_player[0]["name"],
            "score": find_player[0]["score"],
            "pic": find_player[0]["pic"],
        }
        return JsonResponse({'status': 'ok', 'player': player})

class GetGithubPlayers(View):
    def get(self, request):
        return JsonResponse({'status': 'ok', 'players': list(GithubPlayer.objects.values().all())})