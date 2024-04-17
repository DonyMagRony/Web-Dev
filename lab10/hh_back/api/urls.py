
from django.contrib import admin
from django.urls import path,include
from api import views
urlpatterns = [
    path('company/', views.GenericCompanyList.as_view(), name='company-list'),
    path('company/<int:pk>/', views.GenericCompanyDetails.as_view(), name='company-detail'),
    path('company/<int:pk>/vacancies/', views.GenericCompanyVacanciesList.as_view(), name='company-vacancies-list'),
    path('vacancy/', views.GenericVacancyList.as_view(), name='vacancies-list'),
    path('vacancy/<int:pk>/', views.GenericVacancyDetail.as_view(), name='vacancy-detail'),
    path('vacancy/top/', views.GenericTopTenVacanciesList.as_view(), name='vacancy-top-list')
]