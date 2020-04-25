import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public login: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private toastController: ToastController) {
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  private async showErrorToast(errMessage: string) {
    const toast = await this.toastController.create({
      message: errMessage,
      color: 'danger',
      duration: 2000
    });
    await toast.present();
  }

  private async showSuccessToast(successMessage: string) {
    const toast = await this.toastController.create({
      message: successMessage,
      color: 'success',
      duration: 2000
    });
    await toast.present();
  }

  async submitForm() {
    console.log(this.login.value);
    const loading = await this.loadingController.create({
      message: 'Please wait'
    });
    await loading.present();
    try {
      await this.authService.login(this.login.value.email, this.login.value.password);
      if (this.authService.isUserLogin()) {
        console.log('Success');
        this.showSuccessToast('Success');
      } else {
        console.log('Failed to login');
      }
    } catch (error) {
      await this.showErrorToast(JSON.stringify(error));
    } finally {
      await loading.dismiss();
    }
  }

}
