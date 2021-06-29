import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as alertyfy from 'alertifyjs';
import { Observable, of, throwError } from "rxjs";
import { catchError, concatMap, retry, retryWhen } from 'rxjs/operators'
import { ErrorCode } from "../enums/enums";
@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request)
      .pipe(
        retryWhen(error => this.retryRequest(error, 5)),
        catchError((error: HttpErrorResponse) => {
          const errorMessage = this.setError(error);
          console.log(error);
          alertyfy.error(errorMessage);
          return throwError(errorMessage);
        })
      );
  }

  retryRequest(error: Observable<any>, retryCount: number): Observable<unknown> {
    return error.pipe(
      concatMap((checkErr: HttpErrorResponse, count: number) => {

        if (count <= retryCount) {
          switch (checkErr.status) {
            case ErrorCode.serverDown:
              return of(checkErr);
            // case ErrorCode.unauthorised:
            //   return of(checkErr);
          }
        }
        return throwError(checkErr);
      })
    );
  }


  setError(error: HttpErrorResponse): string {
    let errorMessage = 'Unkown error occured';
    if (error.error instanceof ErrorEvent) {
      //CLIENT
      errorMessage = error.error.message;
    }
    else {
      //SERVER
      if (error.status !== 0) {
        errorMessage = error.error.errorMessage;
      }
    }
    return errorMessage;
  }
}
