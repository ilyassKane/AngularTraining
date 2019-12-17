import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import KRGlue from "@lyracom/embedded-form-glue";

@Component({
  selector: "app-paiement",
  templateUrl: "./paiement.component.html",
  styleUrls: ["./paiement.component.scss"]
})
export class PaiementComponent implements OnInit {
  title = "minimal-example";
  promiseError = null;
  constructor(private router: Router) { }
  ngOnInit() {
    const endpoint = "https://api.lyra.com";
    //const publicKey = "69876357:testpublickey_DEMOPUBLICKEY95me92597fd28tGD4r5";
    const publicKey = "73239078:testpublickey_Zr3fXIKKx0mLY9YNBQEan42ano2QsdrLuyb2W54QWmUJQ";

    const formToken = "24c4feMB8XRXmCI7Ckye9VNw19CeyJhbW91bnQiOjk5MCwiY3VycmVuY3kiOiJFVVIiLCJtb2RlIjoiVEVTVCIsInZlcnNpb24iOjMsIm9yZGVySWQiOiJteU9yZGVySWQtOTk5OTk5Iiwic2hvcE5hbWUiOiJTbyBlYXN5IHRvIHRlc3QiLCJicmFuZFByaW9yaXR5IjpbIkNCIiwiRS1DQVJURUJMRVVFIiwiVklTQSIsIk1BU1RFUkNBUkQiLCJWSVNBX0VMRUNUUk9OIiwiTUFFU1RSTyJdLCJjYXRlZ29yaWVzIjp7ImRlYml0Q3JlZGl0Q2FyZHMiOnsiYXBwSWQiOiJjYXJkcyIsInBhcmFtIjpbIk1BRVNUUk8iLCJFLUNBUlRFQkxFVUUiLCJNQVNURVJDQVJEIiwiVklTQSIsIlZJU0FfRUxFQ1RST04iLCJDQiJdfX0sImNhcmRzIjp7Ik1BRVNUUk8iOnsiZmllbGRzIjp7InNlY3VyaXR5Q29kZSI6eyJyZXF1aXJlZCI6ZmFsc2V9fSwiY29weUZyb20iOiJjYXJkcy5ERUZBVUxUIn0sIkUtQ0FSVEVCTEVVRSI6eyJjb3B5RnJvbSI6ImNhcmRzLkRFRkFVTFQifSwiTUFTVEVSQ0FSRCI6eyJjb3B5RnJvbSI6ImNhcmRzLkRFRkFVTFQifSwiVklTQSI6eyJjb3B5RnJvbSI6ImNhcmRzLkRFRkFVTFQifSwiVklTQV9FTEVDVFJPTiI6eyJmaWVsZHMiOnsic2VjdXJpdHlDb2RlIjp7InJlcXVpcmVkIjpmYWxzZX19LCJjb3B5RnJvbSI6ImNhcmRzLkRFRkFVTFQifSwiREVGQVVMVCI6eyJmaWVsZHMiOnsicGFuIjp7Im1pbkxlbmd0aCI6MTAsIm1heExlbmd0aCI6MTksInZhbGlkYXRvcnMiOlsiTlVNRVJJQyIsIkxVSE4iXSwicmVxdWlyZWQiOnRydWUsInNlbnNpdGl2ZSI6dHJ1ZSwiaGlkZGVuIjpmYWxzZSwiY2xlYXJPbkVycm9yIjpmYWxzZX0sImV4cGlyeURhdGUiOnsicmVxdWlyZWQiOnRydWUsInNlbnNpdGl2ZSI6dHJ1ZSwiaGlkZGVuIjpmYWxzZSwiY2xlYXJPbkVycm9yIjpmYWxzZX0sInNlY3VyaXR5Q29kZSI6eyJtaW5MZW5ndGgiOjMsIm1heExlbmd0aCI6MywidmFsaWRhdG9ycyI6WyJOVU1FUklDIl0sInJlcXVpcmVkIjp0cnVlLCJzZW5zaXRpdmUiOnRydWUsImhpZGRlbiI6ZmFsc2UsImNsZWFyT25FcnJvciI6dHJ1ZX19fSwiQ0IiOnsiY29weUZyb20iOiJjYXJkcy5ERUZBVUxUIn19fQ0502";

    KRGlue.loadLibrary(endpoint, publicKey) /* Load the remote library */
      .then(({ KR }) =>
        KR.setFormConfig({
          /* set the minimal configuration */
          formToken: formToken,
          "kr-language": "en-US"
          //"kr-post-url-success": "http://localhost:4200/users" /* to update initialization parameter */
        })
      )
      .then(({ KR }) =>
        KR.addForm("#myPaymentForm")
      ) /* add a payment form  to myPaymentForm div*/
      .then(({ KR, result }) =>
        KR.showForm(result.formId)
      ).then(({ KR }) => {
        KR.onSubmit((result) => {
          console.log("Paiement effectué ...",result);
          if(result!=null && result.clientAnswer.orderStatus==="PAID"){
            console.log("Paiement effectué avec succes",result);
            this.router.navigate(['/appareils']);
          }
        });
      })
      .catch(
        error => (this.promiseError = error + " (see console for more details)")
      );
  }

}

