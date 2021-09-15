package com.devsuperior.movieflix.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;

import com.devsuperior.movieflix.entities.Review;

public class ReviewDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	@NotBlank(message = "Campo texto é obrigatorio")
	private String text;
	private UserDTO user;
	private Long movieId;
	public ReviewDTO() {
	}

	public ReviewDTO(Long id, String text, UserDTO user, Long movieId) {
		this.id = id;
		this.text = text;
		this.user = user;
		this.movieId = movieId;
	}
	public ReviewDTO(Review entity) {
		super();
		this.id = entity.getId();
		this.text = entity.getText();
		this.user = new UserDTO( entity.getUser());
		this.setMovieId(entity.getMovie().getId());
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}
	public void setUser(UserDTO user) {
		this.user = user;
	}
	public UserDTO getUser() {
		return user;
	}
	public void setMovieId(Long id) {
		this.movieId = id;
	}
	public Long getMovieId() {
		return movieId;
	}
}
