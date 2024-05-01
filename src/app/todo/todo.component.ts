import { Component, OnInit } from '@angular/core';
import { Reading } from '../reading';
import { ReadingsService } from '../readings.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{
  readings: Reading[] = [];

  constructor(private readingsService: ReadingsService) { }

  ngOnInit(): void {
    this.getReadings();
  }

  getReadings(): void {
    this.readingsService.getReadings()
    .subscribe(readings => {
       this.readings = readings;
     });
  }

  createReading(title: string, author: string, read: boolean, description: string): void {
    const isRead = read;

    const newReading: Omit<Reading, 'id'> = { title, author, read: isRead, description }; // Crée un nouvel objet Reading avec les valeurs du formulaire

    this.readingsService.createReading(newReading as Reading)
        .subscribe(reading => {
            this.readings.push(reading); // Ajoute la nouvelle lecture à la liste existante
            // Réinitialise les champs du formulaire ou effectue d'autres actions si nécessaire
        });
    console.log("l'envoi a fonctionné")
}

  updateReadingStatus(reading: Reading): void {
    this.readingsService.updateReading(reading.id, reading)
 .subscribe(updatedReading => {
    // Réaliser des actions supplémentaires si nécessaire
  });
  }

  deleteReading(id: number): void {
    this.readingsService.deleteReading(id)
 .subscribe(() => {
    this.readings = this.readings.filter(reading => reading.id!== id);
  });
  }
}

