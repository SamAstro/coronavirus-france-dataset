!function(e,t,a,s){function n(e){switch(e.status){case"OK":alert("Votre inscription a bien été prise en compte."),_.each(a.querySelectorAll(".nl-box-email"),function(e){e.value=""});break;case"NOK":alert("Une erreur est survenue lors de votre inscription.");break;case"EXIST":alert("Vous êtes déjà inscrit.")}}void 0===s.Newsletter&&(s.Newsletter={}),s.Newsletter.displayNewsletterBox=function(t,n,l){var r="",i='<div class="newsletter-rgpd">France Télévisions utilise votre adresse email afin de vous adresser des newsletters. Pour exercer vos droits, <a href="https://www.france.tv/services/aide-contact.html" target="_blank">contactez-nous</a>. Pour en savoir plus, <a href="https://www.francetelevisions.fr/groupe/confidentialite" target="_blank">cliquez ici</a>.</div>';switch(n){case"left":r+='<div class="newsletter">',r+='  <span class="title">LA NEWSLETTER ACTU</span><span class="icon"></span>',r+='<span class="text">Nous la préparons pour vous chaque matin</span>',r+='  <input class="newsletter-email nl-box-email" type="email" name="nl-box-email" placeholder="Votre email">',r+='<input class="nl-box-btn newsletter-button" data-provenance="content-col-left" data-url="'+s.Conf.newsletter.subscribe+'" data-tracking-part="newsletter::left" type="button" value="OK" />',r+=i,r+="</div>";break;case"20h-bloc-content":case"20h-bloc-taxo":r+='<div class="newsletter middle-jt clearfix"><span class="icon"></span>',r+='<p class="title">Le 20h dans votre boîte mail</p>',r+='<span class="text">Recevez tous les jours le <strong>replay du 20h</strong> et les meilleurs sujets du JT dans votre boite mail</span>',r+='<span class="form"><input class="newsletter-email nl-box-email" type="email" name="nl-box-email" placeholder="Votre adresse mail">',r+='<input class="nl-box-btn newsletter-button" data-provenance="'+n+'" data-url="'+s.Conf.newsletter20h.subscribe+'" data-tracking-part="newsletter::bottom" type="button" value="S\'abonner" /></span>',r+=i,r+="</div>";break;case"jt-bloc-content":case"jt-bloc-taxo":r+='<div class="newsletter middle-jt jt-bloc clearfix"><span class="icon"></span>',r+='<p class="title">Toute l\'actu dès 7h30</p>',r+='<span class="text">Recevez la newsletter quotidienne de franceinfo tous les matins dans votre boîte mail</span>',r+='<span class="form"><input class="newsletter-email nl-box-email" type="email" name="nl-box-email" placeholder="Votre adresse mail">',r+='<input class="nl-box-btn newsletter-button" data-provenance="'+n+'" data-url="'+s.Conf.newsletter.subscribe+'" data-tracking-part="newsletter::bottom" type="button" value="S\'abonner" /></span>',r+=i,r+="</div>";break;case"bottom":r+='<div class="newsletter bottom clearfix">',r+='  <span class="title">LA NEWSLETTER ACTU</span><span class="icon"></span>',r+='<span class="container-right"><span class="text">Nous la préparons pour vous chaque matin</span>',r+='  <input class="newsletter-email nl-box-email" type="email" name="nl-box-email" placeholder="Votre email">',r+='<input class="nl-box-btn newsletter-button" data-provenance="content-bottom" data-url="'+s.Conf.newsletter.subscribe+'" data-tracking-part="newsletter::bottom" type="button" value="OK" /></span>',r+=i,r+="</div>";break;case"longread":r+='<div class="newsletter bottom clearfix">',r+='  <span class="title">toute l\'actu dès 7h30</span><span class="icon"></span>',r+='<span class="container-right"><span class="text">Recevez la newsletter quotidienne franceinfo</span>',r+='  <input class="newsletter-email nl-box-email" type="email" name="nl-box-email" placeholder="Votre email">',r+='<input class="nl-box-btn newsletter-button" data-provenance="content-bottom" data-url="'+s.Conf.newsletter.subscribe+'" data-tracking-part="newsletter::bottom" type="button" value="OK" /></span>',r+=i,r+="</div>";break;case"taxonomy-col-right":r+='<aside class="newsletter rightBlock">',r+='  <span class="header">LA NEWSLETTER ACTU</span><div class="newsletter-body"><span class="icon"></span>',r+='<span class="container-right"><span class="text">Nous la préparons pour vous chaque matin</span>',r+='  <input class="newsletter-email nl-box-email" type="email" name="nl-box-email" placeholder="Votre email">',r+='<input class="nl-box-btn newsletter-button" data-provenance="'+n+'" data-url="'+s.Conf.newsletter.subscribe+'" data-tracking-part="newsletter::taxonomy-right" type="button" value="OK" /></span></div>',r+=i,r+="</aside>";break;case"election":r+='<div class="newsletter election clearfix"><span class="icon"></span>',r+='<p class="title">La Newsletter Elections</p>',r+='<p class="text">Recevez chaque jour le meilleur de l\'actualité<br>des législatives</p>',r+='<div class="form clearfix"><input class="newsletter-email nl-box-email" type="email" name="nl-box-email" placeholder="Votre adresse mail">',r+='<input class="nl-box-btn newsletter-button" data-provenance="election" data-url="'+s.Conf.newsletterLegislatives.subscribe+'" data-tracking-part="newsletter::bottom" type="button" value="OK" /></div>',r+=i,r+="</div>";break;case"bottom-election":r+='<div class="newsletter bottom election clearfix">',r+='  <span class="title">LA NEWSLETTER ELECTIONS</span><span class="icon"></span>',r+='<span class="container-right"><span class="text">Recevez chaque jour le meilleur de l\'actualité des législatives</span>',r+='  <input class="newsletter-email nl-box-email" type="email" name="nl-box-email" placeholder="Votre email">',r+='<input class="nl-box-btn newsletter-button" data-provenance="election" data-url="'+s.Conf.newsletterLegislatives.subscribe+'" data-tracking-part="newsletter::bottom" type="button" value="OK" /></span>',r+=i,r+="</div>"}var o=e(r),c=e(t);switch(l){case"before":o.insertBefore(c);break;case"after":o.insertAfter(c);break;case"append":c.append(o);break;case"prepend":c.prepend(o);break;default:o.insertAfter(c)}o.find(".nl-box-btn").click(_.debounce(function(e){var t=_.getPath(s,"Content.id")||a.location.pathname;s.countClick(e.target.dataset.trackingPart+"::"+t),s.Newsletter.displayNewsletterSubscribe(o)},1e3,!0))},s.Newsletter.displayNewsletterSubscribe=function(t){var a=!1,s=t.find(".nl-box-btn"),l=t.find(".nl-box-email").val();""==l?alert("Veuillez saisir une adresse email."):(l.match("^[A-Za-z0-9](([_.-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([.-]?[a-zA-Z0-9]+)*).([A-Za-z]{2,})$")||(a=!0),1==a?alert("Veuillez saisir une adresse email correcte."):e.ajax({type:"POST",url:s.attr("data-url"),data:{email:l,provenance:s.attr("data-provenance")},async:!1,success:n}))},a.dispatchEvent(new CustomEvent("FTVi::Newsletter::ready",{bubbles:!0}))}(jQuery,window,document,FTVi);