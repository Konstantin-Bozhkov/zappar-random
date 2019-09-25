from django.http import HttpResponse
from django.http import JsonResponse
from django.template.loader import render_to_string
from django.views.generic.edit import FormView

from users.models import ZapparUsers
from users.form import UsersForm
from users.services.random_user import RandomUser

class UsersView(FormView):
    template_name = 'index.html'
    form_class = UsersForm
    http_method_names = ['get','post']

    def post(self,request):
        gender = request.POST.get('gender')
        nationality = request.POST.get('nationality')
        results = request.POST.get('results')

        ## Get a random user
        random_users = RandomUser.get_random_user(gender, nationality, results)
        
        ## JSON response object
        cards = []

        ## Build the json response and save to the DB
        for user in random_users:
            zap_user = ZapparUsers(
                gender = user['gender'], 
                title = user['name']['title'], 
                fname = user['name']['first'], 
                lname = user['name']['last'], 
                phone = user['phone'],
                email = user['email'] 
            )
            zap_user.save()
            html = render_to_string('card.html', { 'user':user })
            cards.append(html)

        
        json_data = JsonResponse({'html':cards})

        ## Return the response as json
        return HttpResponse(json_data, content_type="application/json")