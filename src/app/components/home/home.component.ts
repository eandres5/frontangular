import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // lista para el menu y submenus
  listaMenu: any[];

  displayedColumns = ['id', 'name', 'progress', 'color', 'accion'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

   applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  products: any[];
  cols: any[];
  name = 'Angular 5';
  options={
      timeOut: 3000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true
  };

  constructor(private _router: Router) { }

  ngOnInit(): void {
    /* This is the code that is responsible for the animation of the menu. */
    let sideBar = document.querySelector(".sidebar");
    let sideBarBtn = document.querySelector(".bx-menu");
    let menu_header = document.querySelector(".menu_header");

    // mostrar ocultar menu para anchos mayores 780px
    sideBarBtn.addEventListener("click", () => {
      sideBar.classList.toggle("close");
      menu_header.classList.toggle("menu_header_move");
    });

    // para anchos menores a 760px recarga la pagina
    // se oculata el menu automaticamente
    if (window.innerWidth < 780) {
      sideBar.classList.add("close");
    }

    // para tamaños resileables
    window.addEventListener("resize", function () {
      if (window.innerWidth > 780) {
        console.log("mayor de 780px");
        sideBar.classList.remove("close");
        menu_header.classList.toggle("menu_header_move");
      }
      if (window.innerWidth < 780) {
        console.log("adapta");
        sideBar.classList.add("close");
        menu_header.classList.toggle("menu_header_move");
      }
    });

    this.listaMenu = [
      { nombre: 'Administracion', ruta: '/home/cliente', icono: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKJJREFUSEu9ldENgzAQQ+0JOkLLJh2FTkZH6SiwARsY5SNIHM3HBZn8RcndOztSTJgXzf1xL0DSG8AE4NWpbAbwIfmr9QcFksqFZ2fzWjaTHFoAlQOSXdZJOtVHBfcC4kR1Hy2sitMK7IDsY6cV2AF2i+wAu0V2gN0iO8BukQOwAnhkG4f7C8k9T+JvWgLneyETFgBjM3AuTv63vCtYMoPYARsr6LYZ8bpKdAAAAABJRU5ErkJggg==", submenu: true, listaMenus: [{ menu: 'Orden', ruta: '/home/orden/ordenes' },{ menu: 'Clientes', ruta: '/home/cliente/clientes' }, { menu: 'Articulos', ruta: '/home/articulo/articulos' }] }
    ];
  }

  openNew() {
    
  }

  ngOnDestroy(): void {
    // para destruir las conexiones
  }

  /**
   * The function takes an event as an argument, then finds the parent element of the parent element of
   * the target of the event, and toggles the class "showMenu" on that element
   * @param {any} event - any - this is the event that is triggered when the user clicks on the menu
   * item.
   */
  subMenu(event: any) {
    let sub = event.target.parentElement.parentElement;
    sub.classList.toggle("showMenu");
  }

  /**
   * Cada vez que se recarga la pagina se colocara en la parte superior de la misma
   */
  scrollUp() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  cerrarSesion(){
    this._router.navigate(['']);
  }
}
