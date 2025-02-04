import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(AuthService)
    const authHeader = authService.getAuthHeader()

    const cloneRequest = req.clone({setHeaders: {Authorization: authHeader}})

    return next(cloneRequest)
}