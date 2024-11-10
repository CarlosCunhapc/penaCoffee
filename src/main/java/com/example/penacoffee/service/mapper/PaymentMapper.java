package com.example.penacoffee.service.mapper;

import com.example.penacoffee.domain.Order;
import com.example.penacoffee.domain.Payment;
import com.example.penacoffee.service.dto.OrderDTO;
import com.example.penacoffee.service.dto.PaymentDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Payment} and its DTO {@link PaymentDTO}.
 */
@Mapper(componentModel = "spring")
public interface PaymentMapper extends EntityMapper<PaymentDTO, Payment> {
    @Mapping(target = "order", source = "order", qualifiedByName = "orderId")
    PaymentDTO toDto(Payment s);

    @Named("orderId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    OrderDTO toDtoOrderId(Order order);
}
