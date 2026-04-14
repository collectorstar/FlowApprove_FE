import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpContext, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiClientConfig } from '../config/api-client.config';

interface RequestOptions {
  params?: HttpParams | Record<string, string | number | boolean>;
  context?: HttpContext;
}

@Injectable({ providedIn: 'root' })
export class ApiRuntimeService {
  private readonly http = inject(HttpClient);

  get<T>(path: string, options?: RequestOptions): Observable<T> {
    return this.http.get<T>(this.buildUrl(path), {
      params: options?.params,
      context: options?.context
    });
  }

  post<TBody, TResponse>(path: string, body: TBody, options?: RequestOptions): Observable<TResponse> {
    return this.http.post<TResponse>(this.buildUrl(path), body, {
      params: options?.params,
      context: options?.context
    });
  }

  private buildUrl(path: string): string {
    return `${apiClientConfig.baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
  }
}
