import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {Category} from "../model/category";
import {CategoryService} from "../services/category.service";
declare var $ :any;
var $screensize = $(window).width();
@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit,AfterContentInit {
  ngAfterContentInit(): void {
    $('#menu .nav > li > .dropdown-menu').each(function() {
      var menu = $('#menu').offset();
      var dropdown = $(this).parent().offset();

      var i = (dropdown.left + $(this).outerWidth()) - (menu.left + $('#menu').outerWidth());

      if (i > 0) {
        $(this).css('margin-left', '-' + (i + 5) + 'px');
      }
    });

    var $screensize = $(window).width();
    $('#menu .nav > li, #header .links > ul > li').on("mouseenter", function() {

      if ($screensize > 991) {
        $(this).find('> .dropdown-menu').stop(true, true).slideDown('fast');
      }
      $(this).bind('mouseleave', function() {

        if ($screensize > 991) {
          $(this).find('> .dropdown-menu').stop(true, true).css('display', 'none');
        }
      });});
    $('#menu .nav > li div > ul > li').on("mouseenter", function() {

      if ($screensize > 991) {
        $(this).find('> div').css('display', 'block');
      }
      $(this).bind('mouseleave', function() {
        if ($screensize > 991) {
          $(this).find('> div').css('display', 'none');
        }
      });});
    $('#menu .nav > li > .dropdown-menu').closest("li").addClass('sub');

// Clearfix for sub Menu column
    $( document ).ready(function() {
      $screensize = $(window).width();
      if ($screensize > 1199) {
        $('#menu .nav > li.mega-menu > div > .column:nth-child(6n)').after('<div class="clearfix visible-lg-block"></div>');
      }
      if ($screensize < 1199) {
        $('#menu .nav > li.mega-menu > div > .column:nth-child(4n)').after('<div class="clearfix visible-lg-block visible-md-block"></div>');
      }
    });
    $( window ).resize(function() {
      $screensize = $(window).width();
      if ($screensize > 1199) {
        $("#menu .nav > li.mega-menu > div .clearfix.visible-lg-block").remove();
        $('#menu .nav > li.mega-menu > div > .column:nth-child(6n)').after('<div class="clearfix visible-lg-block"></div>');
      }
      if ($screensize < 1199) {
        $("#menu .nav > li.mega-menu > div .clearfix.visible-lg-block").remove();
        $('#menu .nav > li.mega-menu > div > .column:nth-child(4n)').after('<div class="clearfix visible-lg-block visible-md-block"></div>');
      }
    });

// Clearfix for Brand Menu column
    $( document ).ready(function() {
      $screensize = $(window).width();
      if ($screensize > 1199) {
        $('#menu .nav > li.menu_brands > div > div:nth-child(12n)').after('<div class="clearfix visible-lg-block"></div>');
      }
      if ($screensize < 1199) {
        $('#menu .nav > li.menu_brands > div > div:nth-child(6n)').after('<div class="clearfix visible-lg-block visible-md-block"></div>');
      }
      if ($screensize < 991) {
        $("#menu .nav > li.menu_brands > div > .clearfix.visible-lg-block").remove();
        $('#menu .nav > li.menu_brands > div > div:nth-child(4n)').after('<div class="clearfix visible-lg-block visible-sm-block"></div>');
        $('#menu .nav > li.menu_brands > div > div:last-child').after('<div class="clearfix visible-lg-block visible-sm-block"></div>');
      }
      if ($screensize < 767) {
        $("#menu .nav > li.menu_brands > div > .clearfix.visible-lg-block").remove();
        $('#menu .nav > li.menu_brands > div > div:nth-child(2n)').after('<div class="clearfix visible-lg-block visible-xs-block"></div>');
        $('#menu .nav > li.menu_brands > div > div:last-child').after('<div class="clearfix visible-lg-block visible-xs-block"></div>');
      }
    });
    $( window ).resize(function() {
      $screensize = $(window).width();
      if ($screensize > 1199) {
        $("#menu .nav > li.menu_brands > div > .clearfix.visible-lg-block").remove();
        $('#menu .nav > li.menu_brands > div > div:nth-child(12n)').after('<div class="clearfix visible-lg-block"></div>');
      }
      if ($screensize < 1199) {
        $("#menu .nav > li.menu_brands > div > .clearfix.visible-lg-block").remove();
        $('#menu .nav > li.menu_brands > div > div:nth-child(6n)').after('<div class="clearfix visible-lg-block visible-md-block"></div>');
      }
      if ($screensize < 991) {
        $("#menu .nav > li.menu_brands > div > .clearfix.visible-lg-block").remove();
        $('#menu .nav > li.menu_brands > div > div:nth-child(4n)').after('<div class="clearfix visible-lg-block visible-sm-block"></div>');
        $('#menu .nav > li.menu_brands > div > div:last-child').after('<div class="clearfix visible-lg-block visible-sm-block"></div>');
      }
      if ($screensize < 767) {
        $("#menu .nav > li.menu_brands > div > .clearfix.visible-lg-block").remove();
        $('#menu .nav > li.menu_brands > div > div:nth-child(4n)').after('<div class="clearfix visible-lg-block visible-xs-block"></div>');
        $('#menu .nav > li.menu_brands > div > div:last-child').after('<div class="clearfix visible-lg-block visible-xs-block"></div>');
      }
    });
  }
  @Input() catId: number;
  @Input() categories: Category[];
  myCatId:number;
  flag=false;
  subCategories:Category[]=[];
  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.getAllCategories();
    this.getChildern(this.catId);
  }

  // hasChildren(category:Category){
  //   return this.categories.filter(c=>c.parentId===category.id).length>0;
  // }

  hasChildren(categoryId: number) {
    if (!this.categories)
      return false;

    var result = this.categories.filter(x => x.parentId == categoryId);
    return result && result.length > 0 ? true : false;
  }
  getChildern(id:number){
    this.subCategories=this.categories.filter(c=>c.parentId===id);
  }

  getAllCategories(){
    this.categoryService.getCategories().then(result=>{
      this.categories=result;
    });
  }

  mouseoverDone(res:boolean,caIdddd){
    this.flag=res;
    this.myCatId=caIdddd;
  }

}
