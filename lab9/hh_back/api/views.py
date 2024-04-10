from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Company,Vacancy
# Create your views here.
def companies(request):
    companies = Company.objects.all()
    companies_json=[c.to_json() for c in companies]
    return JsonResponse(companies_json,safe=False)

def companies_detail(request,id):
    company = Company.objects.all().get(id=id)
    return JsonResponse(company.to_json(),safe=False)

from django.http import JsonResponse
from .models import Company, Vacancy

def companies_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
        vacancies = Vacancy.objects.filter(company=company)
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=404)


def vacancies(request):
    vacancies = Vacancy.objects.all()
    vacancies_json=[c.to_json() for c in vacancies]
    return JsonResponse(vacancies_json,safe=False)

def vacancies_detail(request,id):
    vacancies = Vacancy.objects.all().get(id=id)
    return JsonResponse(vacancies.to_json(),safe=False)

def vacancies_top(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies_json=[c.to_json() for c in vacancies]
    return JsonResponse(vacancies_json,safe=False)