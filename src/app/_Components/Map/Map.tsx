
export function Map() {
  return (
    <section id="google-map-area">
      <div className="mx-6 mb-6">
        <div className="flex">
          <div className="w-full">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6781.824723130916!2d-15.960493206022646!3d18.097286921138725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe96529b45e8bb57%3A0x5cc8e86d64766358!2sWIMEX!5e1!3m2!1sen!2s!4v1766504047349!5m2!1sen!2s"
            width="600"
            height="450" 
            style={{border:0, width: "100%", height: 450}} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

