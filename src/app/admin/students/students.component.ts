import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {

  images = [
        { url: 'https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg', alt: 'Image 1' },
        { url: 'https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg', alt: 'Image 2' },
        { url: 'https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg', alt: 'Image 3' }
      ];
    
      currentIndex = 0;
    
      prev() {
        this.currentIndex = (this.currentIndex === 0) ? (this.images.length - 1) : (this.currentIndex - 1);
      }
    
      next() {
        this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : (this.currentIndex + 1);
      }

}