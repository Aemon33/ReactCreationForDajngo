import admin from './assets/admin.jpg';
import drf from './assets/drf.jpg';
import mvt from './assets/mvt.jpg';
import orm from './assets/orm.jpg';

export const CORE_CONCEPTS = [
  {
    image: mvt,
    title: 'MVT',
    description:
    'A design pattern separating models, templates, and views',
  },
  {
    image: admin,
    title: 'Admin',
    description:
    'A web interface for managing models.',
  },
  {
    image: drf,
    title: 'DRF',
    description:
      'A framework for building RESTful APIs in Django',
  },
  {
    image: orm,
    title: 'ORM',
    description:
      'A tool for database interactions using Python objects',
  },
];

export const EXAMPLES = {
  admin: {
    title: 'Admin',
    description:
      'This registers the Book model in the Django admin interface and allows searching by title and author for easier management.',
    code: `
from django.contrib import admin
from .models import Book

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 
    'published_date')
    search_fields = ('title', 'author')
}`,
  },
  mvt: {
    title: 'MVT',
    description:
      'This defines the Book model, which includes title, author, and published_date fields. The __str__ method returns the book\'s title, enhancing readability.',
    code: `
from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    published_date = models.DateField()

    def __str__(self):
        return self.title`,
  },
  orm: {
    title: 'ORM',
    description:
      'The book_list view retrieves all Book objects from the database and renders them in the book_list.html template, making the book data available for display.',
    code: `

    from django.shortcuts import render
    from .models import Book
    
    def book_list(request):
        books = Book.objects.all()
        return render(request,
         'book_list.html',
         {'books': books})
}`,
  },
  drf: {
    title: 'DRF',
    description:
      'The BookViewSet enables CRUD operations for the Book model through a RESTful API. It retrieves all books and uses the BookSerializer for data conversion.',
    code: `
from rest_framework import viewsets
from .models import Book
from .serializers import BookSerializer

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer`,
  },
};