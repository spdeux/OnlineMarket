import {Component, OnInit} from '@angular/core';
import {WishListService} from "../services/wish-list.service";
import {wishList} from "../model/wishList";
import {Router} from "@angular/router";
import {ProductService} from "../services/product.service";


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  wishlistCollection = [];
  userId: number = 1;

  constructor(private wishListService: WishListService,
              private productService: ProductService,
              private router: Router) {
  }

  ngOnInit() {
    this.getWishListByUser(this.userId);
  }

  getWishListByUser(userId:number) {
    return this.wishListService.getWishListByUserId(userId).then(result => {
      this.wishlistCollection = result;
    });
  }

  onDelete(id: number) {
    this.wishListService.deleteFromWishList(id).then(result => {
      this.getWishListByUser(this.userId).then(result2 => {
        this.wishListService.addEvent.emit(-1);
        console.log(result2);
      });
    });
  }

  onNavigate(product) {
    this.router.navigate(['/products', product.id]);
  }

}
