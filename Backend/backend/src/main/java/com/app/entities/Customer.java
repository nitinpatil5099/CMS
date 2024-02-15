package com.app.entities;


import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@NamedQuery(name="Customer.findByCustomerId",query="select c from Customer where c.customerId=:customerId")

@Entity
@Table(name = "customers")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Customer {
	
	@Id
	@Column( name = "customer_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long customerId;
	
	@Column(length = 20, name = "name")
	private String name;
	
	@Column(length = 40, name = "email")
	private String email;
	
	@Column(length = 20, name = "password")
	private String password;
	
	@Column(length = 10, name = "mobile_no")
	private String mobileNo;
	
	@Column(length = 20, name = "balance")
	private int balance;
	
	@Column(length = 20, name = "dob")
	private LocalDate dob;
	
	@Column(length = 20, name = "course_name")
	private Course courseName;
	
	@OneToMany(mappedBy = "cust",fetch = FetchType.EAGER)
	private List<RechargeHistory> rechargeHistoryList ;
	
	public void setDob(LocalDate dob) {
		this.dob=dob;
	}
	
	
}
