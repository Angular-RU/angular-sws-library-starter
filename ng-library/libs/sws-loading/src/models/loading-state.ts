export abstract class LoadingState {
  public loading: boolean;
  public notFound: boolean;
  public error: boolean;

  finishLoad(data: any) {
    this.error = false;
    this.loading = false;
    if (data === null) {
      this.notFound = true;
    } else {
      this.notFound = false;
    }
  }

  startLoad() {
    this.error = false;
    this.notFound = false;
    this.loading = true;
  }

  errorLoad(error: any) {
    this.error = true;
    this.loading = false;
    console.error(error);
  }
}
