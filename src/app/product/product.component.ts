import {Component, OnInit, Input} from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../model/product";
import {Router} from "@angular/router";
import {WishListService} from "../services/wish-list.service";
import {wishList} from "../model/wishList";
import {ShoppingCartService} from "../services/shopping-cart.service";
import {ShoppingCart} from "../model/shopping-cart";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() inputProduct: Product;
  userId: number = 1;
  wishList: wishList;
  shoppingCart:ShoppingCart;
  disabledAddToCart:boolean=false;

  constructor(private router: Router,
              private wishListService: WishListService,
              private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.wishList = new wishList();
    this.shoppingCart=new ShoppingCart();
  }

  AddToWishList(product: Product) {


    this.wishList.userId = this.userId;
    this.wishList.product=product;
    this.wishList.date = new Date();

    this.wishListService.IsExistProductInWishlist(this.userId,product.id).then(result=>{
      // console.log(result);
      if(result.length===0){
        this.wishListService.addToWishList(this.wishList).then(result2 => {
          this.wishListService.addEvent.emit(1);
          // console.log(result2);
        });
      }
    });
  }

  AddToShoppingCart(product: Product) {
    this.disabledAddToCart=true;
    this.shoppingCart.userId = this.userId;
    this.shoppingCart.product = product;
    this.shoppingCart.quantity = 1;

    this.shoppingCartService.IsExistProductInShoppingCart(this.userId, product.id).then(result => {
      if (result.length == 0) {
        this.shoppingCartService.addToShoppingCart(this.shoppingCart).then(result2 => {
          this.shoppingCartService.addEvent.emit(1);
          this.disabledAddToCart=false;
          // console.log(result2);
        });
      }
      else {
        this.shoppingCartService.getShoppingCartByUserIdAndProductId(this.userId, product.id).then(result4 => {
          this.shoppingCart.id=result4[0].id;
          this.shoppingCart.quantity+=result4[0].quantity;

          this.shoppingCartService.UpdateShoppingCart(this.shoppingCart).then(result3 => {
            this.disabledAddToCart=false;
            // console.log(result3);

          });

        });
      }
    });

  }

  onNavigate(product) {
    this.router.navigate(['/products', product.id]);
  }

}
