from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    city = models.CharField(max_length=100)
    address = models.TextField()
    def to_json(self):
        return {
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }    
    def __str__(self):
        return self.name


class Vacancy(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    def to_json(self):
        return {
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': self.company.name,
        }
    def __str__(self):
        return self.name
    