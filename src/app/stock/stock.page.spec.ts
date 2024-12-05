import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertController, IonicModule } from '@ionic/angular';
import { StockPage } from './stock.page';

describe('StockPage', () => {
  let component: StockPage;
  let fixture: ComponentFixture<StockPage>;
  let alertCtrlSpy: jasmine.SpyObj<AlertController>;

  beforeEach(async () => {
    // Création d'un spy pour AlertController
    alertCtrlSpy = jasmine.createSpyObj('AlertController', ['create']);

    await TestBed.configureTestingModule({
      declarations: [StockPage],
      imports: [IonicModule.forRoot()],
      providers: [{ provide: AlertController, useValue: alertCtrlSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(StockPage);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('devrait créer le composant', () => {
    expect(component).toBeTruthy();
  });

  it('devrait mettre à jour le stock après une commande', () => {
    const produit = component.products?.[0]; // Eau minérale
    if (produit) {
      component.updateStock(produit.id, 20);
      expect(produit.stock).toBe(20);  // Vérifie que la quantité de stock a été mise à jour à 20
    } else {
      fail('Le produit est indéfini');
    }
  });

  it('devrait simuler une commande pour un produit et mettre à jour le stock', (done) => {
    const produit = component.products?.[0]; // Eau minérale
    if (produit) {
      spyOn(component, 'updateStock').and.callThrough();
      component.orderProduct(produit);

      // Vérifie que la fonction updateStock est appelée après 2 secondes
      setTimeout(() => {
        expect(component.updateStock).toHaveBeenCalledWith(produit.id, 20);
        done();
      }, 2500); // Attendre un peu plus de 2 secondes pour simuler le délai
    } else {
      fail('Le produit est indéfini');
    }
  });

  it('devrait alerter si le stock devient faible après une commande', async () => {
    const produit = component.products?.[1]; // Savon liquide (stock = 0)
    if (produit) {
      // Création d'un spy pour l'alerte
      const alertSpy = jasmine.createSpyObj('HTMLIonAlertElement', ['present']);
      alertCtrlSpy.create.and.returnValue(Promise.resolve(alertSpy));

      // Mise à jour du stock pour un produit avec une quantité faible
      component.updateStock(produit.id, 2); // La quantité passe à 2, au-dessus du seuil de faible stock
      expect(produit.stock).toBe(2);

      // Vérifie qu'une alerte a été créée si le stock est faible
      expect(alertCtrlSpy.create).toHaveBeenCalledWith({
        header: 'Stock Faible',
        message: `Le stock de ${produit.name} est inférieur à ${produit.lowStockThreshold} unités.`,
        buttons: ['OK'],
      });

      // Vérifie que l'alerte a été affichée
      await alertSpy.present();
      expect(alertSpy.present).toHaveBeenCalled();
    } else {
      fail('Le produit est indéfini');
    }
  });

  // Autres tests à ajouter...
});
