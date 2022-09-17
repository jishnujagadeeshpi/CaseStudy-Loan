package com.ibm.jwtutilis;

import java.io.Serializable;
import java.sql.Date;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Configuration
@Component
public class TokenManager implements Serializable {
	
	
	private static final long serialVersionUID = 7008375124389347049L;
	public static final long TOKEN_VALIDITY = 10*60*60;
	@Value("${secret}")
	private String jwtSecret;
	
	String encodedString = Base64.getEncoder().encodeToString("Jishnu".getBytes());
	
	public String generateJwtToken(String name) {
		
		Map<String, Object> claims = new HashMap<>();
	      return Jwts.builder().setClaims(claims).setSubject(name) 
	         .setIssuedAt(new Date(System.currentTimeMillis())) 
	         .setExpiration(new Date(System.currentTimeMillis() + TOKEN_VALIDITY * 1000000)) 
	         .signWith(SignatureAlgorithm.HS512, encodedString).compact(); 
	}
	
	public String getUsernameFromToken(String token) {
		return getClaimFromToken(token, Claims::getSubject);
	}
	
	public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
		final Claims claims = getAllClaimsFromToken(token);
		return claimsResolver.apply(claims);
	}
	
	private Claims getAllClaimsFromToken(String token) {
		return Jwts.parser().setSigningKey(encodedString).parseClaimsJws(token).getBody();
	}

}
