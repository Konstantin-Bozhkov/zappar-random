from django.contrib import admin
from django import forms
from .models import ZapparUsers

class ZapparUsersAdmin(admin.ModelAdmin):
    list_display = ('fname','lname','gender' ,'phone')

admin.site.register(ZapparUsers, ZapparUsersAdmin)
