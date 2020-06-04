import { TestBed, async, inject } from "@angular/core/testing";

import { AuthGuard } from "./auth.guard";
import { TestingModule } from "../testing/testing.module";
import { AuthService } from "../services/auth/auth.service";

describe("AuthGuard", () => {
  let authGuard: AuthGuard;
  let authService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      providers: [AuthGuard, AuthService]
    });
    authGuard = TestBed.get(AuthGuard);
    authService = TestBed.get(AuthService);
  }));

  it("should ...", inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
