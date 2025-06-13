package pf.email.Dto;

public class EmailDto {

	private String senderEmail;
	private String subject;
	private String message;
	public EmailDto() {
		super();
	}
	public String getSenderEmail() {
		return senderEmail;
	}
	public void setSenderEmail(String senderEmail) {
		this.senderEmail = senderEmail;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	@Override
	public String toString() {
		return "EmailDto [senderEmail=" + senderEmail + ", subject=" + subject + ", message=" + message + "]";
	}
	
	
}
