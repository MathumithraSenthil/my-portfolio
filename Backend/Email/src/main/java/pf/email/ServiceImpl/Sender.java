package pf.email.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import jakarta.mail.internet.MimeMessage;

@Component
public class Sender {

	@Autowired
	private JavaMailSender javaMailSender;

	public boolean sendMail(String senderEmail, String subject, String message) {
		
		boolean flag=false;
		
		try {
			
			MimeMessage mimeMessage = javaMailSender.createMimeMessage();
			MimeMessageHelper helper = new MimeMessageHelper(mimeMessage);
			
			helper.setTo("mathumithrasenthil2812@gmail.com"); 
			helper.setSubject("sub: " + subject);
			helper.setText("From: " + senderEmail + "\n\nMessage:\n" + message);
			javaMailSender.send(mimeMessage);
			flag=true;
			
		} catch (Exception e) {
			flag=false;
			e.printStackTrace();
			System.out.println(e);
		}
		return flag;
		
	}
	
	
	
}
