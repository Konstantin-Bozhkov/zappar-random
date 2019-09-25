from django.urls import path
from django.urls import reverse

from .views import UsersView

urlpatterns = [
    path('', UsersView.as_view(), name='zappar-users'),
]