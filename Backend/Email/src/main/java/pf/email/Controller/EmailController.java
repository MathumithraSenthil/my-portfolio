package pf.email.Controller;

import org.springframework.web.bind.annotation.RestController;

import pf.email.Dto.EmailDto;
import pf.email.ServiceImpl.Sender;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/Email")
@CrossOrigin("*")
public class EmailController {

	@Autowired
	private Sender mailSender;
	@PostMapping("/send")
	public ResponseEntity<String> sendMail(@RequestBody EmailDto email) {
		mailSender.sendMail(email.getSenderEmail(), email.getSubject(), email.getMessage());
		    return ResponseEntity.ok("Mail Sent Successfully");
	}
	
}
