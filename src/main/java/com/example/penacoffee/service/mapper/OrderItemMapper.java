package com.example.penacoffee.service.mapper;

import com.example.penacoffee.domain.Order;
import com.example.penacoffee.domain.OrderItem;
import com.example.penacoffee.domain.Product;
import com.example.penacoffee.service.dto.OrderDTO;
import com.example.penacoffee.service.dto.OrderItemDTO;
import com.example.penacoffee.service.dto.ProductDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link OrderItem} and its DTO {@link OrderItemDTO}.
 */
@Mapper(componentModel = "spring")
public interface OrderItemMapper extends EntityMapper<OrderItemDTO, OrderItem> {
    @Mapping(target = "product", source = "product", qualifiedByName = "productId")
    @Mapping(target = "order", source = "order", qualifiedByName = "orderId")
    OrderItemDTO toDto(OrderItem s);

    @Named("productId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    ProductDTO toDtoProductId(Product product);

    @Named("orderId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    OrderDTO toDtoOrderId(Order order);
}
