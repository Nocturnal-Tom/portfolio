import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

/*
  I am really ashamed as to how I implemented the floating element notification.
  However it works and is simple, hopefully I will find a better way in the future.
*/


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  @ViewChild("email_copy", { read: ElementRef<HTMLSpanElement> })
  private email_copy!: ElementRef<HTMLSpanElement>;

  @ViewChild("contactEmail", {read: ElementRef})
  private email_field!: ElementRef<HTMLInputElement>;

  ngAfterViewInit(){
    // We need to "finish" the animation at the start because it's simpler than adding it and checking if it's already added every time
    let el = this.email_copy.nativeElement;
    let el_anims = el.getAnimations();
    if (el_anims.length > 0){
      el_anims[0].finish();
    }

    // We don't want this style to be active at the start, so we disable it for now.
    let ef = this.email_field.nativeElement;
    ef.classList.toggle("conatact-email-disabled", true);
  }

  emailToClipboard(){
    navigator.clipboard.writeText("tommyreade9608@gmail.com");
    this.play_animation();
  }


  play_animation(){
    let el = this.email_copy.nativeElement;
    let el_anims = el.getAnimations();
    if (el_anims.length > 0){
      el_anims[0].play();
    }
    //el.style.animation = "none";
    this.reflow_element(el);
    //el.style.animation = "";
  }


  reflow_element(element: HTMLElement){
    this.email_copy.nativeElement.offsetHeight;
  }

  // removes the class that disables the style added by the :invalid
  enable_email_validation_style(){
    let ef = this.email_field.nativeElement;
    ef.classList.toggle("conatact-email-disabled", false);
    console.log(ef.classList);

  }
}
