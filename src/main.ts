//Code originally generated by Claude-3 AI March 2024
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { enableProdMode, importProvidersFrom } from "@angular/core";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
   ]
});
