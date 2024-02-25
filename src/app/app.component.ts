import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Productos } from './model/productos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'comparadorProductos';

  productList = signal<Productos[]>([
    {
      id: 0,
      nombre: "Samsung Galaxy S22",
      imagen: "https://images.versus.io/objects/samsung-galaxy-s22.front.variety.1644431090377.jpg",
      rendimiento: 84,
      bateria: 64,
      camaras: 79,
      audio: 19
    },
    {
      id: 1,
      nombre: "Samsung Galaxy S21 FE",
      imagen: "https://images.versus.io/objects/samsung-galaxy-s21-fe-5g.front.variety.1641311467724.jpg",
      rendimiento: 70,
      bateria: 65,
      camaras: 79,
      audio: 26
    },
    {
      id: 2,
      nombre: "Samsung Galaxy S23",
      imagen: "https://images.versus.io/objects/samsung-galaxy-s23.front.variety.1675277832905.jpg",
      rendimiento: 91,
      bateria: 61,
      camaras: 86,
      audio: 19
    },
    {
      id: 3,
      nombre: "iPhone 13",
      imagen: "https://images.versus.io/objects/apple-iphone-13.front.variety.1631694414000.jpg",
      rendimiento: 82,
      bateria: 52,
      camaras: 77,
      audio: 15
    },
    {
      id: 4,
      nombre: "iPhone 14",
      imagen: "https://images.versus.io/objects/apple-iphone-14.front.variety.1662576114127.jpg",
      rendimiento: 83,
      bateria: 52,
      camaras: 78,
      audio: 15
    },
    {
      id: 0,
      nombre: "iPhone 15",
      imagen: "https://images.versus.io/objects/apple-iphone-15.front.variety.1694550535352.jpg",
      rendimiento: 89,
      bateria: 53,
      camaras: 79,
      audio: 15
    },
  ])

  selectedProducts = this.productList();

  onProductSelected(product: Productos) {
    this.selectedProducts.push(product);
    this.selectedProducts = this.selectedProducts.slice(1);
  }

  onProductDeselected(product: Productos) {
    this.selectedProducts = this.selectedProducts.filter(p => p.id !== product.id);
  }


}
