import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';
import { inject } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { SKIP_GLOBAL_LOADING } from '../loading-context';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.context.get(SKIP_GLOBAL_LOADING)) {
    return next(req);
  }

  const loadingService = inject(LoadingService);
  loadingService.begin();

  return next(req).pipe(finalize(() => loadingService.end()));
};
