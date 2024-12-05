import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {
  products = [
    {
      id: 1,
      name: 'Eau minérale',
      category: 'Boissons',
      stock: 10,
      price: 1.5,
      lowStockThreshold: 5,
      lastUpdated: new Date('2024-12-03T14:00:00'),
    },
    {
      id: 2,
      name: 'Savon liquide',
      category: 'Hygiène',
      stock: 0,
      price: 2.5,
      lowStockThreshold: 3,
      lastUpdated: new Date('2024-12-02T10:30:00'),
    },
  ];

  constructor() { }

  ngOnInit() { }

  /**
   * Passer une commande pour un produit
   * @param product L'objet produit pour lequel passer une commande
   */
  orderProduct(product: any): void {
    console.log(`Commande en cours pour : ${product.name}`);
    // Simulation d'une commande avec mise à jour du stock
    setTimeout(() => {
      this.updateStock(product.id, 20); // Mise à jour du stock après réception de la commande
    }, 2000); // Simulation d'un délai de traitement
  }

  /**
   * Met à jour le stock d'un produit
   * @param productId L'identifiant du produit
   * @param newStock La nouvelle quantité en stock
   */
  updateStock(productId: number, newStock: number): void {
    const product = this.products.find((p) => p.id === productId);
    if (product) {
      product.stock = newStock;
      product.lastUpdated = new Date();
      console.log(`Stock mis à jour pour ${product.name}: ${product.stock}`);
    } else {
      console.error('Produit non trouvé pour mise à jour du stock.');
    }
  }
}
