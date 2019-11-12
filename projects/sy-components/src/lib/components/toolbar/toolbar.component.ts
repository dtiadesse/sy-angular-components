import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sy-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

   toolbarEl = document.querySelector('.toolbar');
   toggleBtnEl = document.querySelector('.toolbar-toggle-button');
   toolbarExpandCtnEl = document.querySelector('.toolbar-expanded-content');

  // toggleBtnEl.addEventListener('click', function (event) {
  //   toggleBtnEl.classList.toggle('expanded');
  //   if (toggleBtnEl.classList.contains('expanded')) {
  //     toolbarEl.classList.add('expanded');
  //     toolbarExpandCtnEl.classList.add('open');
  //     toggleBtnEl.querySelector('span').innerHTML = 'Expand';
  //   } else {
  //     toolbarEl.classList.remove('expanded');
  //     toolbarExpandCtnEl.classList.remove('open');
  //     toggleBtnEl.querySelector('span').innerHTML = 'Collapse';
  //   }
  //   event.preventDefault();
  // });

  // Array.prototype.slice.call(document.querySelectorAll('.accordion')).forEach(function (accordion) {
  //   const accordionTriggerEl = accordion.querySelector('.accordion-header a');
  //   accordionTriggerEl.addEventListener('click', ((event) => {
  //     accordion.classList.toggle('open');
  //     event.preventDefault();
  //   }));
  // });
  // Array.prototype.slice.call(document.querySelectorAll('.filters')).forEach(function (filter) {
  //   const filterTriggerEl = filter.querySelector('.filter-header a');
  //   const filterContentEl = filter.querySelector('.filter-content');
  //   filterTriggerEl.addEventListener('click', ((event) => {
  //     filterContentEl.classList.toggle('open');
  //     event.preventDefault();
  //   }));
  // });

}
