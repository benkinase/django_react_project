from django.db import models

class Employee(models.Model):
    name=models.CharField(max_length=30)
    address=models.CharField(max_length=100)
    role=models.CharField(max_length=50)
    department=models.CharField(max_length=50)
    salary=models.FloatField()
    
    def __str__(self):
        return self.name


    class Meta:
        verbose_name_plural = "Employees"
        ordering = ['name']