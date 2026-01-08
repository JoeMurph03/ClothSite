from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def home(request):
    return render(request, 'hanger/home.html')

def index(request):
    return HttpResponse("Hello, world. You're at the site index.")


#think images live in here or atleast get pulled from a different directory


