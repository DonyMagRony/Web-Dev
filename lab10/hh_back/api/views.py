from django.shortcuts import render
from django.shortcuts import render, get_object_or_404

from django.http.response import JsonResponse
from api.models import Company,Vacancy
from rest_framework import generics
from .serializers import CompanySerializer,VacancySerializer



class GenericCompanyList(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer       

class GenericCompanyDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class GenericCompanyVacanciesList(generics.ListAPIView):
    serializer_class = VacancySerializer
    def get_queryset(self):
        company_id = self.kwargs.get('company')
        queryset = Vacancy.objects.filter(company_id=company_id)
        return queryset

class GenericVacancyList(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class GenericVacancyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class GenericTopTenVacanciesList(generics.ListAPIView):
    queryset = Vacancy.objects.order_by('-salary')[:10]
    serializer_class = VacancySerializer

