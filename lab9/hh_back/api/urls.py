
from django.contrib import admin
from django.urls import path,include
from api import views
urlpatterns = [
    path('companies',views.companies),
    path('companies/<int:id>/',views.companies_detail),
    path('companies/<int:id>/vacancies/',views.companies_vacancies),
    path('vacancies/',views.vacancies),
    path('vacancies/<int:id>',views.vacancies_detail),
    path('vacancies/top-ten/',views.vacancies_top),
]