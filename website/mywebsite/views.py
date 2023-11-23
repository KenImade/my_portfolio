from django.shortcuts import render, HttpResponse
from mywebsite.projects_data import projects

# Create your views here.
def home(request):
    return render(request, 'home.html')

def portfolio(request):
    return render(request, 'portfolio.html', {'projects': projects})

def project_detail(request, project_id):
    project = next((p for p in projects if p['id'] == project_id), None)
    if project:
        return render(request, 'project_detail.html', {'project':project})
    else:
        return render(request, '404.html')

def about(request):
    return render(request, 'about.html')

def blog(request):
    return render(request, 'blog.html')

def contact(request):
    return render(request, 'contact.html')