
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

  ngOnInit() {
    const endpoint = "https://api.lyra.com";
    const publicKey = "69876357:testpublickey_DEMOPUBLICKEY95me92597fd28tGD4r5";
    //const publicKey = "73239078:testpublickey_Zr3fXIKKx0mLY9YNBQEan42ano2QsdrLuyb2W54QWmUJQ";
    
    const formToken = "25l4g128-vT2q9YYSCEydj1g19CeyJhbW91bnQiOjUwMDAsImN1cnJlbmN5IjoiRVVSIiwibW9kZSI6IlRFU1QiLCJ2ZXJzaW9uIjozLCJzaG9wTmFtZSI6IkRlbW8gc2hvcCIsImJyYW5kUHJpb3JpdHkiOlsiQkFOQ09OVEFDVCIsIk1BRVNUUk8iXSwiY2F0ZWdvcmllcyI6eyJkZWJpdENyZWRpdENhcmRzIjp7ImFwcElkIjoiY2FyZHMiLCJwYXJhbSI6WyJBTUVYIiwiVklTQSIsIk1BRVNUUk8iLCJFLUNBUlRFQkxFVUUiLCJNQVNURVJDQVJEIiwiQkFOQ09OVEFDVCIsIlZJU0FfRUxFQ1RST04iLCJDQiJdfX0sImNhcmRzIjp7Ik1BRVNUUk8iOnsiZmllbGRzIjp7InNlY3VyaXR5Q29kZSI6eyJyZXF1aXJlZCI6ZmFsc2V9fSwiY29weUZyb20iOiJjYXJkcy5ERUZBVUxUIn0sIkFNRVgiOnsiZmllbGRzIjp7InNlY3VyaXR5Q29kZSI6eyJtYXhMZW5ndGgiOjR9fSwiY29weUZyb20iOiJjYXJkcy5ERUZBVUxUIn0sIkUtQ0FSVEVCTEVVRSI6eyJjb3B5RnJvbSI6ImNhcmRzLkRFRkFVTFQifSwiTUFTVEVSQ0FSRCI6eyJjb3B5RnJvbSI6ImNhcmRzLkRFRkFVTFQifSwiVklTQSI6eyJjb3B5RnJvbSI6ImNhcmRzLkRFRkFVTFQifSwiQkFOQ09OVEFDVCI6eyJmaWVsZHMiOnsic2VjdXJpdHlDb2RlIjp7InJlcXVpcmVkIjpmYWxzZSwiaGlkZGVuIjp0cnVlfX0sImNvcHlGcm9tIjoiY2FyZHMuREVGQVVMVCJ9LCJWSVNBX0VMRUNUUk9OIjp7ImZpZWxkcyI6eyJzZWN1cml0eUNvZGUiOnsicmVxdWlyZWQiOmZhbHNlfX0sImNvcHlGcm9tIjoiY2FyZHMuREVGQVVMVCJ9LCJERUZBVUxUIjp7ImZpZWxkcyI6eyJwYW4iOnsibWluTGVuZ3RoIjoxMCwibWF4TGVuZ3RoIjoxOSwidmFsaWRhdG9ycyI6WyJOVU1FUklDIiwiTFVITiJdLCJyZXF1aXJlZCI6dHJ1ZSwic2Vuc2l0aXZlIjp0cnVlLCJoaWRkZW4iOmZhbHNlLCJjbGVhck9uRXJyb3IiOmZhbHNlfSwiZXhwaXJ5RGF0ZSI6eyJyZXF1aXJlZCI6dHJ1ZSwic2Vuc2l0aXZlIjp0cnVlLCJoaWRkZW4iOmZhbHNlLCJjbGVhck9uRXJyb3IiOmZhbHNlfSwic2VjdXJpdHlDb2RlIjp7Im1pbkxlbmd0aCI6MywibWF4TGVuZ3RoIjozLCJ2YWxpZGF0b3JzIjpbIk5VTUVSSUMiXSwicmVxdWlyZWQiOnRydWUsInNlbnNpdGl2ZSI6dHJ1ZSwiaGlkZGVuIjpmYWxzZSwiY2xlYXJPbkVycm9yIjp0cnVlfX19LCJDQiI6eyJjb3B5RnJvbSI6ImNhcmRzLkRFRkFVTFQifX193a01";

    KRGlue.loadLibrary(endpoint, publicKey) /* Load the remote library */
      .then(({ KR }) =>
        KR.setFormConfig({
          /* set the minimal configuration */
          formToken: formToken,
          "kr-language": "en-US",
          "kr-post-url-success": "http://localhost:4200/users" /* to update initialization parameter */
        })
      )
      .then(({ KR }) =>
        KR.addForm("#myPaymentForm")
      ) /* add a payment form  to myPaymentForm div*/
      .then(({ KR, result }) =>
        KR.showForm(result.formId)
      ) /* show the payment form */
      .catch(
        error => (this.promiseError = error + " (see console for more details)")
      );
  }
  
}

